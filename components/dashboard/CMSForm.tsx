
import React from 'react';
import { Button, Input, Select, Label } from '../ui';

interface CMSFormProps {
  type: string;
  onClose: () => void;
  categories: any[];
}

export const CMSForm: React.FC<CMSFormProps> = ({ type, onClose, categories }) => {
  const isCategory = type === 'categories';
  const isUser = type === 'users';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black dark:text-white capitalize">Gerir {isUser ? 'Usuário' : type}</h3>
            <p className="text-xs text-slate-500">Introduza os dados e permissões necessários.</p>
          </div>
          <button onClick={onClose} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-slate-600 transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <form className="p-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {isCategory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label>Nome da Categoria</Label>
                <Input placeholder="Ex: Entretenimento..." />
              </div>
              <div className="space-y-4">
                <Label>Status</Label>
                <Select>
                  <option>Ativo</option>
                  <option>Inativo</option>
                </Select>
              </div>
            </div>
          ) : isUser ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label>Nome Completo</Label>
                  <Input placeholder="Ex: Emídio Bento" />
                </div>
                <div className="space-y-4">
                  <Label>Email Institucional</Label>
                  <Input type="email" placeholder="nome@tuatv.co.mz" />
                </div>
                <div className="space-y-4">
                  <Label>Senha Temporária</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label>Perfil de Acesso</Label>
                  <Select>
                    <option>Super Admin</option>
                    <option>Editor de Conteúdo</option>
                    <option>Jornalista</option>
                    <option>Gestor de Grelha</option>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label>Estado da Conta</Label>
                  <Select>
                    <option>Ativo</option>
                    <option>Suspenso</option>
                    <option>Aguardando Ativação</option>
                  </Select>
                </div>
                <div className="p-6 bg-tua-pink/5 border border-tua-pink/10 rounded-2xl">
                   <p className="text-[10px] font-bold text-tua-pink leading-relaxed">
                     Nota: O novo usuário receberá um email com as credenciais de acesso e deverá trocar a senha no primeiro login.
                   </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label>Título Principal</Label>
                  <Input placeholder="Escreva um título impactante..." />
                </div>
                <div className="space-y-4">
                  <Label>Categoria</Label>
                  <Select>
                    {categories.map(c => <option key={c.id}>{c.name}</option>)}
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label>Resumo / Excerpt</Label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-tua-pink/30 rounded-2xl outline-none transition-all dark:text-white" placeholder="Breve introdução..."></textarea>
                </div>
              </div>

              <div className="space-y-6">
                <Label>Upload Multimédia</Label>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-tua-purple/30 bg-tua-purple/5 rounded-[2rem] p-8 text-center cursor-pointer hover:bg-tua-purple/10 transition-all">
                    <svg className="w-8 h-8 mx-auto mb-2 text-tua-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    <p className="text-xs font-bold text-tua-purple">Vídeo (MP4/MOV)</p>
                  </div>
                  <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 rounded-[2rem] p-8 text-center cursor-pointer hover:border-tua-pink transition-all">
                    <svg className="w-8 h-8 mx-auto mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p className="text-xs font-bold text-slate-500">Imagem de Capa</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6">
            <Button variant="outline" className="flex-grow" onClick={onClose}>Cancelar</Button>
            <Button variant="gradient" className="flex-grow">Salvar e Atualizar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
