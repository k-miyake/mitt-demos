import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
    @Get()
    getProfile(): Object {
        return {
            'lastName': '三宅',
            'firstName': 'ミュウ'
        };
    }
}
