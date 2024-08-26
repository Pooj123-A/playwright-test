
import { test, expect } from "@playwright/experimental-ct-react";
import App2366 from "../example/App2366.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2366 />);
  await expect(component).toContainText("Learn React");
});
