'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { List, PlusCircle, Trash2, Save, ChevronRight, ChevronLeft, Folder, Tag } from 'lucide-react';

// Sample data representing database fields and their values
const sourceData = {
  setor: ['Corte', 'Costura', 'Montagem', 'Acabamento', 'Almoxarifado', 'Manutenção', 'RH', 'Financeiro', 'TI', 'Diretoria'],
  cargo: ['Cortador', 'Costureira', 'Montador', 'Acabador', 'Supervisor', 'Gerente de Produção', 'Analista de RH'],
};

// Main data structure for a Category Definition
type CategoryDefinition = {
  id: string;
  name: string;
  sourceField: 'setor' | 'cargo';
  groups: Array<{
    id: string;
    name: string;
    items: string[];
  }>;
};

const initialCategories: CategoryDefinition[] = [
  {
    id: 'cat_setor_area',
    name: 'Agrupamento de Setores por Área',
    sourceField: 'setor',
    groups: [
      { id: 'group1', name: 'Produção', items: ['Corte', 'Costura', 'Montagem', 'Acabamento'] },
      { id: 'group2', name: 'Apoio', items: ['Almoxarifado', 'Manutenção'] },
      { id: 'group3', name: 'Administrativo', items: ['RH', 'Financeiro', 'TI'] },
    ],
  },
  {
    id: 'cat_cargo_nivel',
    name: 'Nível Hierárquico de Cargos',
    sourceField: 'cargo',
    groups: [],
  }
];


export default function CategoriasPage() {
    const [categories, setCategories] = useState<CategoryDefinition[]>(initialCategories);
    const [selectedCategory, setSelectedCategory] = useState<CategoryDefinition | null>(categories[0]);
    const { toast } = useToast();

    const getUncategorizedItems = () => {
        if (!selectedCategory) return [];
        const allItems = sourceData[selectedCategory.sourceField];
        const categorizedItems = selectedCategory.groups.flatMap(g => g.items);
        return allItems.filter(item => !categorizedItems.includes(item));
    };

    const handleMoveItem = (item: string, fromGroup: string | null, toGroup: string | null) => {
        if (!selectedCategory) return;

        const updatedCategory = { ...selectedCategory };

        // Remove from the source group
        if (fromGroup) {
            const source = updatedCategory.groups.find(g => g.id === fromGroup);
            if (source) {
                source.items = source.items.filter(i => i !== item);
            }
        }

        // Add to the destination group
        if (toGroup) {
            const destination = updatedCategory.groups.find(g => g.id === toGroup);
            if (destination) {
                destination.items.push(item);
            }
        }
        
        setSelectedCategory(updatedCategory);
    };
    
    const handleSave = () => {
        if (!selectedCategory) return;
        setCategories(prev => prev.map(c => c.id === selectedCategory.id ? selectedCategory : c));
        toast({
            title: "Categoria Salva!",
            description: `A categoria "${selectedCategory.name}" foi atualizada.`,
        });
    };

    return (
        <div className="p-4 h-full flex gap-4">
            {/* Left Panel: Category List */}
            <Card className="w-1/3 flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><List /> Tipos de Categoria</CardTitle>
                    <CardDescription>Selecione uma categoria para editar seus grupos.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto">
                    <div className="space-y-2">
                        {categories.map(cat => (
                            <Button 
                                key={cat.id}
                                variant={selectedCategory?.id === cat.id ? "secondary" : "ghost"}
                                className="w-full justify-start text-left h-auto py-2"
                                onClick={() => setSelectedCategory(cat)}
                            >
                                <div>
                                    <p className="font-semibold">{cat.name}</p>
                                    <p className="text-xs text-muted-foreground">Fonte: {cat.sourceField}</p>
                                </div>
                            </Button>
                        ))}
                    </div>
                </CardContent>
                 <div className="p-2 border-t">
                    <Button className="w-full" variant="outline"><PlusCircle className="mr-2 h-4 w-4"/> Nova Categoria</Button>
                </div>
            </Card>

            {/* Right Panel: Category Editor */}
            <Card className="w-2/3 flex flex-col">
                {selectedCategory ? (
                    <>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-xl">Editor de Grupos</CardTitle>
                                    <CardDescription>Editando: {selectedCategory.name}</CardDescription>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="destructive" size="sm"><Trash2 className="mr-2 h-4 w-4" /> Excluir</Button>
                                    <Button size="sm" onClick={handleSave}><Save className="mr-2 h-4 w-4" /> Salvar</Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4 overflow-y-auto">
                            <div className="p-4 border rounded-lg bg-muted/30">
                               <p className="text-sm font-medium mb-2 flex items-center gap-2"><Folder className="h-4 w-4 text-primary" /> Itens Não Categorizados</p>
                               <div className="p-2 border bg-background rounded-md h-32 overflow-y-auto space-y-1">
                                    {getUncategorizedItems().map(item => (
                                        <div key={item} className="p-2 text-sm rounded-md flex items-center gap-2">
                                            <Tag className="h-3 w-3 text-muted-foreground"/> {item}
                                        </div>
                                    ))}
                               </div>
                            </div>
                            
                            <Separator />

                            <div className="space-y-4">
                                {selectedCategory.groups.map(group => (
                                    <div key={group.id} className="p-4 border rounded-lg">
                                        <Label className="font-semibold text-base">{group.name}</Label>
                                        <div className="grid grid-cols-11 gap-2 mt-2 items-center">
                                            {/* Items in Group */}
                                            <div className="col-span-5 border rounded-md h-40 p-2 overflow-y-auto bg-background">
                                                 {group.items.map(item => (
                                                    <div key={item} className="p-2 text-sm rounded-md hover:bg-muted/50 flex items-center gap-2 cursor-pointer">
                                                        <Tag className="h-3 w-3 text-muted-foreground"/> {item}
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Action Buttons */}
                                            <div className="col-span-1 flex flex-col justify-center items-center gap-2">
                                                <Button size="icon" variant="outline" onClick={() => handleMoveItem(group.items[0], group.id, null)} disabled={group.items.length === 0}><ChevronLeft className="h-4 w-4" /></Button>
                                                <Button size="icon" variant="outline" onClick={() => handleMoveItem(getUncategorizedItems()[0], null, group.id)} disabled={getUncategorizedItems().length === 0}><ChevronRight className="h-4 w-4" /></Button>
                                            </div>
                                            {/* All Items (for context) */}
                                            <div className="col-span-5 border rounded-md h-40 p-2 overflow-y-auto bg-muted/30">
                                                {getUncategorizedItems().map(item => (
                                                    <div key={item} className="p-2 text-sm rounded-md hover:bg-muted/50 flex items-center gap-2 cursor-pointer">
                                                        <Tag className="h-3 w-3 text-muted-foreground"/> {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4"/> Adicionar Novo Grupo</Button>
                        </CardContent>
                    </>
                ) : (
                     <div className="flex-grow flex items-center justify-center text-muted-foreground">
                        <p>Selecione uma categoria para começar.</p>
                    </div>
                )}
            </Card>
        </div>
    );
}
