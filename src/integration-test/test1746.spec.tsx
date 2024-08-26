
import { test, expect } from "@playwright/experimental-ct-react";
import App1746 from "../example/App1746.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1746 />);
  await expect(component).toContainText("Learn React");
});
