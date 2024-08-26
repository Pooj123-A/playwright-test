
import { test, expect } from "@playwright/experimental-ct-react";
import App2756 from "../example/App2756.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2756 />);
  await expect(component).toContainText("Learn React");
});
