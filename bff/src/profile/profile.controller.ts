import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
    @Get()
    getProfile() {
        return {
            lastName: 'Miyake',
            firstName: 'Mew',
            breed: 'Russian Blue'
        };
    }
}
