
import { test, expect } from "@playwright/experimental-ct-react";
import App646 from "../example/App646.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App646 />);
  await expect(component).toContainText("Learn React");
});
