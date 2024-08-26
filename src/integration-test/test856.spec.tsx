
import { test, expect } from "@playwright/experimental-ct-react";
import App856 from "../example/App856.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App856 />);
  await expect(component).toContainText("Learn React");
});
