
import { test, expect } from "@playwright/experimental-ct-react";
import App116 from "../example/App116.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App116 />);
  await expect(component).toContainText("Learn React");
});
