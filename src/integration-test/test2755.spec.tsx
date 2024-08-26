
import { test, expect } from "@playwright/experimental-ct-react";
import App2755 from "../example/App2755.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2755 />);
  await expect(component).toContainText("Learn React");
});
