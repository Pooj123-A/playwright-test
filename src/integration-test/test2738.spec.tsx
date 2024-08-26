
import { test, expect } from "@playwright/experimental-ct-react";
import App2738 from "../example/App2738.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2738 />);
  await expect(component).toContainText("Learn React");
});
