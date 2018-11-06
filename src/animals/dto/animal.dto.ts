import { ApiModelProperty } from "@nestjs/swagger";

export class AnimalDto {

  @ApiModelProperty({ type: String, required: true })
  name: string
  
}
