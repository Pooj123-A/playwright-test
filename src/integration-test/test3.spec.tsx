
import { test, expect } from "@playwright/experimental-ct-react";
import App3 from "../example/App3.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App3 />);
  await expect(component).toContainText("Learn React");
});
