
import { test, expect } from "@playwright/experimental-ct-react";
import App314 from "../example/App314.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App314 />);
  await expect(component).toContainText("Learn React");
});
