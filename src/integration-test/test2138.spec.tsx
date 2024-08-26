
import { test, expect } from "@playwright/experimental-ct-react";
import App2138 from "../example/App2138.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2138 />);
  await expect(component).toContainText("Learn React");
});
