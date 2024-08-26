
import { test, expect } from "@playwright/experimental-ct-react";
import App938 from "../example/App938.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App938 />);
  await expect(component).toContainText("Learn React");
});
