
import { test, expect } from "@playwright/experimental-ct-react";
import App1856 from "../example/App1856.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1856 />);
  await expect(component).toContainText("Learn React");
});
