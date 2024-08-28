
import { test, expect } from "@playwright/experimental-ct-react";
import App916 from "./App916.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App916 />);
  await expect(component).toContainText("Learn React");
});
