
import { test, expect } from "@playwright/experimental-ct-react";
import App734 from "../example/App734.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App734 />);
  await expect(component).toContainText("Learn React");
});
