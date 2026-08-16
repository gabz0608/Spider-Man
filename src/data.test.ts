import {describe,expect,it} from 'vitest';
import {claims,comics,profiles,timeline} from './data';
import {comicMedia,media,universeMedia} from './media';
describe('integridade editorial',()=>{
 it('mantém profundidade visual mínima por universo',()=>{expect(universeMedia('tobey').length).toBeGreaterThanOrEqual(8);expect(universeMedia('andrew').length).toBeGreaterThanOrEqual(8);expect(universeMedia('tom').length).toBeGreaterThanOrEqual(8);expect(universeMedia('verse').length).toBeGreaterThanOrEqual(8)});
 it('mantém quadrinhos e capas pareados',()=>expect(comicMedia.length).toBe(comics.length));
 it('mantém fontes e status nas afirmações',()=>claims.forEach(c=>{expect(c.source).toBeTruthy();expect(c.status).toBeTruthy()}));
 it('mantém rotas únicas e cronologia extensa',()=>{expect(new Set(Object.values(profiles).map(p=>p.slug)).size).toBe(3);expect(timeline.length).toBeGreaterThanOrEqual(15)});
 it('registra procedência e alternativa de toda mídia',()=>media.forEach(m=>{expect(m.src).toMatch(/^media\//);expect(m.sourceUrl).toMatch(/^https:\/\//);expect(m.alt.length).toBeGreaterThan(20)}));
});
