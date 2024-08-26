
import { test, expect } from "@playwright/experimental-ct-react";
import App490 from "../example/App490.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App490 />);
  await expect(component).toContainText("Learn React");
});
