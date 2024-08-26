
import { test, expect } from "@playwright/experimental-ct-react";
import App404 from "../example/App404.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App404 />);
  await expect(component).toContainText("Learn React");
});
