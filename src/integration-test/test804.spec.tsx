
import { test, expect } from "@playwright/experimental-ct-react";
import App804 from "../example/App804.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App804 />);
  await expect(component).toContainText("Learn React");
});
