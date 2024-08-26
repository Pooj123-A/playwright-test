
import { test, expect } from "@playwright/experimental-ct-react";
import App392 from "../example/App392.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App392 />);
  await expect(component).toContainText("Learn React");
});
