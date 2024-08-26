
import { test, expect } from "@playwright/experimental-ct-react";
import App159 from "../example/App159.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App159 />);
  await expect(component).toContainText("Learn React");
});
