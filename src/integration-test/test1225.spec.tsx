
import { test, expect } from "@playwright/experimental-ct-react";
import App1225 from "../example/App1225.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1225 />);
  await expect(component).toContainText("Learn React");
});
