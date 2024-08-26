
import { test, expect } from "@playwright/experimental-ct-react";
import App587 from "../example/App587.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App587 />);
  await expect(component).toContainText("Learn React");
});
