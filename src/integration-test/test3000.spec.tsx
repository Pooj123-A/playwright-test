
import { test, expect } from "@playwright/experimental-ct-react";
import App3000 from "../example/App3000.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App3000 />);
  await expect(component).toContainText("Learn React");
});
