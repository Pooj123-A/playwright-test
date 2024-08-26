
import { test, expect } from "@playwright/experimental-ct-react";
import App877 from "../example/App877.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App877 />);
  await expect(component).toContainText("Learn React");
});
