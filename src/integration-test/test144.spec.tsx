
import { test, expect } from "@playwright/experimental-ct-react";
import App144 from "../example/App144.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App144 />);
  await expect(component).toContainText("Learn React");
});
