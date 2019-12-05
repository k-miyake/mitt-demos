import { Test, TestingModule } from '@nestjs/testing';
import { MittController } from './mitt.controller';

describe('Mitt Controller', () => {
  let controller: MittController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MittController],
    }).compile();

    controller = module.get<MittController>(MittController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
