
import { test, expect } from "@playwright/experimental-ct-react";
import App1424 from "./App1424.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1424 />);
  await expect(component).toContainText("Learn React");
});
