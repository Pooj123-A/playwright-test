
import { test, expect } from "@playwright/experimental-ct-react";
import App557 from "../example/App557.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App557 />);
  await expect(component).toContainText("Learn React");
});
