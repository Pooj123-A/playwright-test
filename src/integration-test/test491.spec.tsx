
import { test, expect } from "@playwright/experimental-ct-react";
import App491 from "../example/App491.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App491 />);
  await expect(component).toContainText("Learn React");
});
