
import { test, expect } from "@playwright/experimental-ct-react";
import App217 from "../example/App217.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App217 />);
  await expect(component).toContainText("Learn React");
});
