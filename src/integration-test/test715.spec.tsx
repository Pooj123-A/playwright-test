
import { test, expect } from "@playwright/experimental-ct-react";
import App715 from "../example/App715.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App715 />);
  await expect(component).toContainText("Learn React");
});
