
import { test, expect } from "@playwright/experimental-ct-react";
import App2188 from "../example/App2188.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2188 />);
  await expect(component).toContainText("Learn React");
});
