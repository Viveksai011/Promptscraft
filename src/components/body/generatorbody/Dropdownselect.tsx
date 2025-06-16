import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import type { UseCase } from "@/components/body/generatorbody/StructureTemplate";
  interface DropdownselectProps {
    setUseCase: (value: UseCase) => void;
    useCase: UseCase;
  }
  
  const Dropdownselect = ({ setUseCase, useCase }: DropdownselectProps) => {
    return (
      <Select value={useCase} onValueChange={setUseCase} >
        <SelectTrigger className="w-[180px] text-black dark:text-white dark:border-white/40">
          <SelectValue placeholder="Select a Prompt Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-black dark:text-white">
            <SelectItem value="Prompt Generator">Prompt Generator</SelectItem>
            <SelectItem value="Story">Story</SelectItem>
            <SelectItem value="Code">Code</SelectItem>
            <SelectItem value="Creativity">Creativity</SelectItem>
            <SelectItem value="Optimize Prompt">Optimize Prompt</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };
  
  export default Dropdownselect;
  