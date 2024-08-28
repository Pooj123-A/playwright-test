
import { test, expect } from "@playwright/experimental-ct-react";
import App1268 from "./App1268.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1268 />);
  await expect(component).toContainText("Learn React");
});
