
import { test, expect } from "@playwright/experimental-ct-react";
import App1062 from "../example/App1062.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1062 />);
  await expect(component).toContainText("Learn React");
});