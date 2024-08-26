
import { test, expect } from "@playwright/experimental-ct-react";
import App659 from "../example/App659.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App659 />);
  await expect(component).toContainText("Learn React");
});
