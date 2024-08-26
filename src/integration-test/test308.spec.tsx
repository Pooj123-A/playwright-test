
import { test, expect } from "@playwright/experimental-ct-react";
import App308 from "../example/App308.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App308 />);
  await expect(component).toContainText("Learn React");
});
