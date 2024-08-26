
import { test, expect } from "@playwright/experimental-ct-react";
import App89 from "../example/App89.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App89 />);
  await expect(component).toContainText("Learn React");
});
