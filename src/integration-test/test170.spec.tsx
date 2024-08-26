
import { test, expect } from "@playwright/experimental-ct-react";
import App170 from "../example/App170.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App170 />);
  await expect(component).toContainText("Learn React");
});
