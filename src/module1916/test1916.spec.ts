
import { test, expect } from "@playwright/experimental-ct-react";
import App1916 from "./App1916.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1916 />);
  await expect(component).toContainText("Learn React");
});
