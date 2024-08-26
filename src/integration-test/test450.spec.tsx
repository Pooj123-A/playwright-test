
import { test, expect } from "@playwright/experimental-ct-react";
import App450 from "../example/App450.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App450 />);
  await expect(component).toContainText("Learn React");
});
