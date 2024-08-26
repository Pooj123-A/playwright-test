
import { test, expect } from "@playwright/experimental-ct-react";
import App2779 from "../example/App2779.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2779 />);
  await expect(component).toContainText("Learn React");
});
