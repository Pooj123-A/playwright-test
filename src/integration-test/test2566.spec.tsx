
import { test, expect } from "@playwright/experimental-ct-react";
import App2566 from "../example/App2566.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2566 />);
  await expect(component).toContainText("Learn React");
});
