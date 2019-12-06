import { Controller, Get } from '@nestjs/common';

@Controller('mitt')
export class MittController {
    @Get()
    getSession() {
        return {
            title: 'Vue.js 3 に向けたVue.js 入門',
            speaker: '@kazu_pon',
            start: '14:50',
            place: 'The Hub コミュニティポップアップ'
        };
    }
}
