import { Controller, Req, Get } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiBearerAuth, ApiImplicitQuery, ApiOperation } from '@nestjs/swagger';
import { Pagination } from "common/decorators/pagination.decorator";

const logger = require('logger');

@ApiUseTags('Animal')
@Controller('api/v1/animal')
export class AnimalController {

  @Get()
  @ApiOperation({
    title: 'Get all animals', description: `
    Get all animals
  `, operationId: 'GetAll'
  })
  @ApiResponse({ status: 200, description: 'Assets have been successfully returned', isArray: false, type: AssetPaginatedDto })
  @ApiResponse({ status: 403, description: 'Not authorized.' })
  @ApiResponse({ status: 401, description: 'Not authenticated.' })
  @ApiImplicitQuery({ name: 'page[size]', description: 'Page size. Default 10', type: String, required: false })
  @ApiImplicitQuery({ name: 'page[number]', description: 'Page number', type: String, required: false })

  async findAll(@Pagination() pagination) {

    logger.info('Getting all assets');
    const data = await this.assetService.findAll(req.locals.company.id, req.locals.pagination, req.query.ip, onlyActive, isIP6);
    
    return new AssetPaginatedDto(data[0], data[1], req.locals.pagination.pageSize, req.locals.pagination.pageNumber);
  }

}