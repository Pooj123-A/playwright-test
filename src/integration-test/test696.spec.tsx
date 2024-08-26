
import { test, expect } from "@playwright/experimental-ct-react";
import App696 from "../example/App696.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App696 />);
  await expect(component).toContainText("Learn React");
});
