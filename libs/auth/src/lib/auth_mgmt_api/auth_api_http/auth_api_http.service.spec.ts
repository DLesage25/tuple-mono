import { Test, TestingModule } from '@nestjs/testing';
import { AuthApiHttpService } from './auth_api_http.service';

describe('AuthApiHttpService', () => {
  let service: AuthApiHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthApiHttpService],
    }).compile();

    service = module.get<AuthApiHttpService>(AuthApiHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
